export interface ContactFormInterface {
  form: ContactFormFieldInterface[];
  submitButton: ContactFormSubmitButtonInterface;
  message: string;
}

export interface ContactFormSubmitButtonInterface {
  label: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface ContactFormFieldInterface
  extends LabelFieldInterface,
    InputFieldInterface {
  id: string;
  label: string;
  isTextarea?: boolean;
}

export interface LabelFieldInterface {
  label: string;
}

export interface InputFieldInterface {
  type: "text" | "email" | "textarea";
  name: string;
  required?: boolean;
}
