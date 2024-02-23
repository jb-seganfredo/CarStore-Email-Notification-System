// Base function for the activity
const enviarEmail = (addressee, subject, body) => {
    if (!addressee) {
      return {
        status: "Error",
        message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
      };
    }
  
    if (!subject) {
      return {
        status: "Error",
        message:
          "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
      };
    }
  
    if (!body) {
      return {
        status: "Error",
        message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
      };
    }
  
    console.log(
        `
          De: news@carstore.com
          Para: ${addressee}
          Assunto: ${subject}
          
          ${body}
          
          CarStore - Aqui você encontra o seu carro novo
        `
    );
  
    return { status: "Success", message: "E-mail enviado com sucesso!" };
  };
  
  module.exports = enviarEmail;

/*
    1.  Given a date, verify if it is a Monday. If no date is provided, check if the current day is a Monday
    2.  Build the email body
    3.  Function to send email to a list if "receiveEmail" is true
    4.  Handle the error or success response
*/

// Defining clients list

let clients = [
    {
        name: "Roberto",
        addressee : "roberto@gmail.com",
        receiveEmail : true
    },
    {
        name: "Norberto",
        addressee : "norberto@gmail.com",
        receiveEmail : false
    },
    {
        name: "Maria",
        addressee : "maria@hotmail.com",
        receiveEmail : true
    },
    {
        name: "João",
        addressee : "joao@yahoo.com",
        receiveEmail : false
    }
];

// Defining email variables

let newCar = "Ford Ka";

let bestSeller = "Fusca";

let purchaseConditions = "Estamos oferecendo ofertas incríveis e opções flexíveis de financiamento para que você possa realizar o seu sonho de dirigir um carro novo.";

let content = `Esperamos que esta mensagem encontre você bem e animado para as últimas novidades na CarStore! 😊 Este mês, estamos entusiasmados em apresentar a você nosso veículo mais novo, o ${newCar} e o nosso mais vendido ${bestSeller}. Para tornar sua experiência ainda mais especial, preparamos condições exclusivas para aquisição. ${purchaseConditions} Estamos à disposição para agendar um test-drive personalizado, esclarecer dúvidas ou fornecer mais detalhes sobre as ofertas disponíveis. Sinta-se à vontade para nos visitar em uma de nossas lojas ou entrar em contato através deste e-mail. Agradecemos por escolher a CarStore.`;

//  1. Verifying which day of the week it is and if it's a Monday

function isMonday(date = new Date()){
    return date.toDateString().split(" ")[0] === "Mon";
}

//  2.  Building email body

/** 
 * Creates the email body with the given content and client name.
 * 
 * @param {string} content - The content of the email.
 * @param {string} clientName - The name of the client.
 * @returns {string} The email body.
 */
function createEmailBody(content, clientName){
    return`
            Olá, ${clientName}, 
            tudo bem?

            ${content}

            Atenciosamente,
            Equipe CarStore
            `;
}

//  3.1. Function to check if the client should receive an email or not

/**
 * Checks if the client object is valid and returns the value of the receiveEmail property.
 * @param {object} client - The client object to be checked.
 * @returns {boolean} - The value of the receiveEmail property if the client is valid, otherwise false.
 */
function checkClient(client){
    if((!client) || typeof(client.receiveEmail) !== "boolean"){
        return false;
    }
    else{
        return client.receiveEmail;
    }
}

//  3.2. Tratar o retorno de erro ou sucesso da função "enviarEmail()"

function handleEnviarEmail(response){
    if(response.status === "Error"){
        console.log(`${response.status}: ${response.message}`);
    }
    else{
        console.log(response.message);
    }
}

//  4. Handle the error or success response of the "sendEmail()" function

/**
 * Sends emails to a list of clients.
 * 
 * @param {Array} clientsList - The list of clients to send emails to.
 * @param {string} content - The content of the email.
 * @param {string} subject - The subject of the email.
 * @param {Date} [date=new Date()] - The date to check if it's Monday.
 */
function sendEmailToClientList(clientsList, content, subject, date=new Date()){
    
    if(!isMonday(date)){
        let response = {
            status: "Error",
            message: "E-mails só serão enviados às segundas-feiras."
        };
        handleEnviarEmail(response);
    }
    else{
        for(let i=0; i<clientsList.length; i++){
            let currentClient = clientsList[i];
            if(checkClient(currentClient)){
                let currentEmailBody = createEmailBody(content, currentClient.name);
                let response = enviarEmail(currentClient.addressee, subject, currentEmailBody);
                handleEnviarEmail(response);
            }
        }
    }
}

// Exemple: 

sendEmailToClientList(clients, 
            content, 
            "Muitas promoções e preços imperdíveis te esperam!", 
            new Date("2024-02-19:00:00:00")
            );