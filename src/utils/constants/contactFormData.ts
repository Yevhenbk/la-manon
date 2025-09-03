import { ContactFormInterface } from "../interfaces/contactFormInterface";

export const contactFormData: ContactFormInterface = {
    message: "¡Gracias por tu mensaje!",
    form: [
        { id: "firstName", label: "Nombre *", type: "text", name: "firstName", required: true },
        { id: "lastName", label: "Apellido *", type: "text", name: "lastName", required: true },
        { id: "phone", label: "Teléfono *", type: "text", name: "phone", required: true },
        { id: "email", label: "Email *", type: "email", name: "email", required: true },
        { id: "consultation", label: "Mensaje *", type: "text", name: "consultation", required: true, isTextarea: true },
    ],
    submitButton: {
        label: "Enviar",
        type: "submit",
        disabled: false
    }
}