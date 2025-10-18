import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, company, message, service }: ContactFormData = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Nome, email e messaggio sono obbligatori' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Formato email non valido' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'Configurazione email non disponibile' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Map service codes to readable names
    const serviceNames: Record<string, string> = {
      'general': 'Consulenza Generale',
      'cybersecurity': 'Cybersecurity',
      'infrastructure': 'Infrastrutture IT',
      'data': 'Gestione Dati',
      'consulting': 'Consulenza Informatica'
    }

    // Prepare email content
    const serviceName = serviceNames[service] || 'Non specificato'
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #1c002c 0%, #2e005f 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: #c000ff; margin: 0; font-size: 24px; text-align: center;">
            🛡️ CyberNest - Nuovo Messaggio di Contatto
          </h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #2e005f; margin-top: 0;">Dettagli del Contatto</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #1c002c;">Nome:</strong> ${name}
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #1c002c;">Email:</strong> 
            <a href="mailto:${email}" style="color: #c000ff;">${email}</a>
          </div>
          
          ${phone ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #1c002c;">Telefono:</strong> 
            <a href="tel:${phone}" style="color: #c000ff;">${phone}</a>
          </div>
          ` : ''}
          
          ${company ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #1c002c;">Azienda:</strong> ${company}
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #1c002c;">Servizio di interesse:</strong> ${serviceName}
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #1c002c;">Messaggio:</strong>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #c000ff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Questo messaggio è stato inviato dal form di contatto del sito web CyberNest.</p>
            <p>Data e ora: ${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}</p>
          </div>
        </div>
      </div>
    `

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CyberNest Website <noreply@cybernest.it>',
        to: ['info@cybernest.it'],
        reply_to: email,
        subject: `🛡️ Nuovo contatto da ${name} - ${serviceName}`,
        html: emailHtml,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Resend API error:', errorData)
      return new Response(
        JSON.stringify({ error: 'Errore nell\'invio dell\'email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult)

    // Send auto-reply to the user
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #1c002c 0%, #2e005f 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: #c000ff; margin: 0; font-size: 24px; text-align: center;">
            🛡️ CyberNest - Grazie per averci contattato!
          </h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p>Ciao <strong>${name}</strong>,</p>
          
          <p>Grazie per aver contattato CyberNest! Abbiamo ricevuto il tuo messaggio riguardo <strong>${serviceName}</strong> e ti risponderemo il prima possibile.</p>
          
          <p>Il nostro team di esperti esaminerà la tua richiesta e ti contatterà entro 24 ore per fornirti tutte le informazioni di cui hai bisogno.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #c000ff;">
            <h3 style="margin-top: 0; color: #2e005f;">Nel frattempo, ecco cosa puoi fare:</h3>
            <ul style="margin-bottom: 0;">
              <li>Visita il nostro sito per scoprire tutti i nostri servizi</li>
              <li>Seguici sui social media per rimanere aggiornato</li>
              <li>Leggi i nostri case study per vedere come aiutiamo le aziende</li>
            </ul>
          </div>
          
          <p>Se hai domande urgenti, non esitare a chiamarci al <strong>+39 012 345 6789</strong>.</p>
          
          <p>A presto,<br>
          <strong>Il Team CyberNest</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; text-align: center;">
            <p>CyberNest - Il tuo partner per la trasformazione digitale</p>
            <p>Vivaio Digitale, Via Luigi Pasteur, 26, 70024 Gravina in Puglia (BA) | info@cybernest.it</p>
          </div>
        </div>
      </div>
    `

    // Send auto-reply
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CyberNest <info@cybernest.it>',
        to: [email],
        subject: '🛡️ Grazie per averci contattato - CyberNest',
        html: autoReplyHtml,
      }),
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email inviata con successo',
        id: emailResult.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Errore interno del server' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})