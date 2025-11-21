import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { formatContactMessage, openWhatsApp } from '../../services/whatsapp';
import { CheckCircle } from 'lucide-react';

interface ContactFormData {
  nombre: string;
  telefono: string;
  mensaje: string;
}

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const validatePhone = (value: string) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(value)) {
      return 'Por favor, ingresa un número de teléfono válido';
    }
    return true;
  };

  const onSubmit = (data: ContactFormData) => {
    const message = formatContactMessage(data.nombre, data.telefono, data.mensaje);
    openWhatsApp(message);
    setIsSuccess(true);
    reset();

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          ¡Mensaje preparado!
        </h3>
        <p className="text-green-700">
          Se abrirá WhatsApp con tu mensaje. Si no se abrió, haz clic en el botón de WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Nombre"
        {...register('nombre', { required: 'El nombre es obligatorio' })}
        error={errors.nombre?.message}
        placeholder="Tu nombre"
      />

      <Input
        label="Teléfono"
        type="tel"
        {...register('telefono', {
          required: 'El teléfono es obligatorio',
          validate: validatePhone,
        })}
        error={errors.telefono?.message}
        placeholder="+34 600 000 000"
      />

      <Textarea
        label="Mensaje"
        rows={5}
        {...register('mensaje', { required: 'El mensaje es obligatorio' })}
        error={errors.mensaje?.message}
        placeholder="Cuéntanos qué necesitas..."
      />

      <Button type="submit" variant="primary" className="w-full">
        Enviar por WhatsApp
      </Button>
    </form>
  );
}

