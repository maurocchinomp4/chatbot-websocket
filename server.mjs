import WebSocket, { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('listening', () => {
    console.log('Server WebSocket in ascolto sulla porta 8080');
});

server.on('connection', (socket) => {
  console.log('Connessione aperta.');
  socket.send('Benvenuto! Come posso aiutarti?');

  socket.on('message', (message) => {
    console.log(`Messaggio ricevuto: ${message}`);

    switch (true) {
      case message.includes('prezzi') || message.includes('prezzari'):
        socket.send('Puoi trovare informazioni sui nostri prezzari e servizi nel nostro sito');
        break;
      case message.includes('info') || message.includes('informazioni'):
        socket.send('Sono appassionato di programmazione perché mi affascina il modo in cui il codice può trasformare idee in realtà e risolvere problemi complessi. Amo esplorare nuovi linguaggi, tecnologie e strumenti per ampliare le mie competenze e migliorare continuamente. ');
        break;
      case message.includes('orari'):
        socket.send('Rispondo alle tue domande dalle 9:00 alle 18:00, dal lunedì al venerdì.');
        break;
      case message.includes('progetto') || message.includes('progetti'):
        socket.send('Ecco il link al mio progetto :');
        break;
      case message.includes('supporto') || message.includes('aiuto tecnico'):
        socket.send('Ti metto in contatto con un tecnico per il supporto. Per favore, forniscimi una breve descrizione del problema.');
        break;
      case message.includes('corsi') || message.includes('formazione'):
        socket.send('Offriamo corsi di programmazione e tecnologia! Dai un occhio al mio sito per maggiori informazioni');
        break;
      case message.includes('contatti'):
        socket.send('Puoi contattarmi tramite email: assistente@example.com o utilizzare il modulo di supporto sul nostro sito.');
        break;
      default:
        socket.send(`
  Mi dispiace, non ho capito. Prova di nuovo o clicca in basso a destra per tornare al modulo di supporto.
`);
    }
  });

  socket.on('close', () => {
    console.log('Connessione chiusa.');
  });
});