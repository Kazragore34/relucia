import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { formatBookingMessage, openWhatsApp } from '../../services/whatsapp';
import { SERVICE_TYPES } from '../../utils/constants';
import { CheckCircle } from 'lucide-react';

interface BookingFormData {
  nombre: string;
  telefono: string;
  tipo_servicio: string;
  tipo_servicio_otro?: string;
  fecha_servicio: string;
  hora_servicio: string;
  direccion: string;
  descripcion?: string;
}

export function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const tipoServicio = watch('tipo_servicio');
  const showOtrosField = tipoServicio === 'Otros';

  const validatePhone = (value: string) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(value)) {
      return 'Por favor, ingresa un número de teléfono válido';
    }
    return true;
  };

  const validateDate = (value: string) => {
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      return 'La fecha debe ser hoy o en el futuro';
    }
    return true;
  };

  const onSubmit = (data: BookingFormData) => {
    // Formatear el mensaje para WhatsApp
    const servicio = data.tipo_servicio === 'Otros' 
      ? data.tipo_servicio_otro || 'Otros'
      : data.tipo_servicio;
    
    const message = formatBookingMessage({
      nombre: data.nombre,
      telefono: data.telefono,
      tipo_servicio: servicio,
      fecha_servicio: data.fecha_servicio,
      hora_servicio: data.hora_servicio,
      direccion: data.direccion,
      descripcion: data.descripcion,
    });

    // Abrir WhatsApp con el mensaje
    openWhatsApp(message);
    
    setIsSuccess(true);
    reset();

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const serviceOptions = SERVICE_TYPES.map((service) => ({
    value: service,
    label: service,
  }));

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          ¡Reserva enviada con éxito!
        </h3>
        <p className="text-green-700">
          Se abrirá WhatsApp con tu reserva. Si no se abrió, haz clic en el botón de WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre completo"
          {...register('nombre', { required: 'El nombre es obligatorio' })}
          error={errors.nombre?.message}
          placeholder="Juan Pérez"
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
      </div>

      <Select
        label="Tipo de servicio"
        options={serviceOptions}
        {...register('tipo_servicio', { required: 'Debes seleccionar un tipo de servicio' })}
        error={errors.tipo_servicio?.message}
      />

      {showOtrosField && (
        <Input
          label="Especifica el servicio"
          {...register('tipo_servicio_otro', {
            required: showOtrosField ? 'Por favor, especifica el servicio' : false,
          })}
          error={errors.tipo_servicio_otro?.message}
          placeholder="Describe el servicio que necesitas"
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Fecha del servicio"
          type="date"
          {...register('fecha_servicio', {
            required: 'La fecha es obligatoria',
            validate: validateDate,
          })}
          error={errors.fecha_servicio?.message}
          min={new Date().toISOString().split('T')[0]}
        />

        <Input
          label="Hora del servicio"
          type="time"
          {...register('hora_servicio', { required: 'La hora es obligatoria' })}
          error={errors.hora_servicio?.message}
        />
      </div>

      <Input
        label="Dirección"
        {...register('direccion', { required: 'La dirección es obligatoria' })}
        error={errors.direccion?.message}
        placeholder="Calle, número, piso, código postal, Madrid"
      />

      <Textarea
        label="Descripción (opcional)"
        rows={4}
        {...register('descripcion')}
        error={errors.descripcion?.message}
        placeholder="Añade cualquier detalle adicional sobre el servicio que necesitas..."
      />

      <Button type="submit" variant="primary" className="w-full">
        Enviar Reserva por WhatsApp
      </Button>
    </form>
  );
}

