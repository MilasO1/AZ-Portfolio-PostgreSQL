"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { toast } from "react-hot-toast";

// Variables d'environnement
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID,
};

// Validation du formulaire
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  // États
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialisation d'EmailJS
  useEffect(() => {
    if (!EMAILJS_CONFIG.publicKey) {
      console.error("EmailJS public key is missing");
      return;
    }
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validation des données
      const validatedData = contactSchema.parse(formData);

      // Vérification de la configuration EmailJS
      if (
        !EMAILJS_CONFIG.serviceId ||
        !EMAILJS_CONFIG.templateId ||
        !EMAILJS_CONFIG.publicKey
      ) {
        console.error("Configuration EmailJS manquante:", {
          serviceId: EMAILJS_CONFIG.serviceId,
          templateId: EMAILJS_CONFIG.templateId,
          publicKey: EMAILJS_CONFIG.publicKey,
        });
        throw new Error(
          "Configuration EmailJS incomplète. Veuillez vérifier les variables d'environnement."
        );
      }

      // Envoi du formulaire
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
        }
      );

      if (result.status === 200) {
        toast.success("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        // Gestion des erreurs de validation
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Veuillez corriger les erreurs dans le formulaire");
      } else {
        // Gestion des erreurs d'envoi
        console.error("Erreur EmailJS:", error);
        toast.error(
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gestion des changements de champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [name]: value,
    }));
    // Effacer l'erreur quand l'utilisateur modifie le champ
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev: Partial<ContactFormData>) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Rendu du formulaire
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Contact
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-200 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-slate-700"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-200`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Votre email"
                className={`w-full px-4 py-2  border ${
                  errors.email ? "border-red-500" : "border-slate-700"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-200`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-200 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Votre message"
                className={`w-full px-4 py-2  border ${
                  errors.message ? "border-red-500" : "border-slate-700"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-200`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900/40 text-blue-300 py-3 px-6 rounded-md hover:bg-blue-800/60 hover:text-blue-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
