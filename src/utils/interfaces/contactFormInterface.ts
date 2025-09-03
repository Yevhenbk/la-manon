export interface ContactFormInterface {
  form: ContactFormFieldInterface[];
  submitButton: ContactFormSubmitButtonInterface;
};

export interface ContactFormSubmitButtonInterface {
  label: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
};

export interface ContactFormFieldInterface {
  id: string;
  label: string;
  type: "text" | "email" | "textarea";
  name: string;
  required?: boolean;
  isTextarea?: boolean;
}
