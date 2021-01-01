export interface SendEmailRequest {
  email: string;
  _subject: string;
  message: string;
}

export interface SendEmailResponse {
  next: string;
  ok: boolean;
}
