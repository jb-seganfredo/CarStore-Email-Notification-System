# CarStore Email Notification System

A project for the Santander Coders 2023.2 course about automating an email notification system for CarStore's new and best-selling vehicles, tailored to send personalized emails to clients on Mondays with JavaScript.

## Usage

This project is designed to automatically send emails to clients who have opted to receive them. It checks if the current day is Monday and then sends out personalized emails to clients about new and best-selling vehicles at CarStore.

| Function | Description |
| --- | --- |
| enviarEmail | This function sends emails based on the provided parameters. It performs checks for mandatory fields and logs the email content. |
| isMonday([date]) | Checks if the provided date is a Monday. By default, it checks the current date. |
| createEmailBody(content, clientName) | Creates the email body by combining the given content with the client's name. |
| checkClient(client) | Checks if the client object is valid and returns the value of the receiveEmail property. |
| handleEnviarEmail(response) | Logs the status and message of the email sending process. |
| sendEmailToClientList(clientsList, content, subject, [date]) | Sends emails to a list of clients if the provided date is a Monday. It iterates through the client list, checks eligibility, and sends emails accordingly. |

## Contributing

Contributions are welcome! If you have a feature request, bug report, or want to improve the code, please open an issue or submit a pull request.

## Credits

- Project Creator: Júlia Bueno Seganfredo (https://github.com/jb-seganfredo)
