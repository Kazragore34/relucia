import { forwardRef, useImperativeHandle, useRef } from 'react';

interface TimeSelectorProps {
  label?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export interface TimeSelectorRef {
  value: string;
}

export const TimeSelector = forwardRef<HTMLSelectElement, TimeSelectorProps>(
  ({ label, error, value, onChange, required, ...props }, ref) => {
    const selectRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => selectRef.current!);

    // Generar opciones de hora (de 8:00 a 20:00 en intervalos de 30 minutos)
    const timeSlots = [];
    for (let hour = 8; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayTime = `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
        timeSlots.push({ value: timeString, label: displayTime, hour });
      }
    }

    // Separar en mañana (8-12) y tarde (12-20)
    const morningSlots = timeSlots.filter(slot => slot.hour < 12);
    const afternoonSlots = timeSlots.filter(slot => slot.hour >= 12);

    const handleTimeClick = (timeValue: string) => {
      if (selectRef.current) {
        selectRef.current.value = timeValue;
        if (onChange) {
          onChange(timeValue);
        }
        // Disparar evento change para react-hook-form
        const event = new Event('change', { bubbles: true });
        selectRef.current.dispatchEvent(event);
      }
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Selector oculto para react-hook-form */}
        <select
          ref={selectRef}
          value={value || ''}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="hidden"
          required={required}
          {...props}
        >
          <option value="">Selecciona una hora</option>
          {timeSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>

        {/* Selector visual con botones */}
        <div className="space-y-4">
          {/* Mañana */}
          <div>
            <h4 className="text-sm font-medium text-text-light mb-2">Mañana (8:00 AM - 11:30 AM)</h4>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {morningSlots.map((slot) => (
                <button
                  key={slot.value}
                  type="button"
                  onClick={() => handleTimeClick(slot.value)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                    value === slot.value
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-text border-gray-300 hover:border-primary hover:bg-primary-light hover:text-white'
                  }`}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tarde */}
          <div>
            <h4 className="text-sm font-medium text-text-light mb-2">Tarde (12:00 PM - 8:00 PM)</h4>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {afternoonSlots.map((slot) => (
                <button
                  key={slot.value}
                  type="button"
                  onClick={() => handleTimeClick(slot.value)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                    value === slot.value
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-text border-gray-300 hover:border-primary hover:bg-primary-light hover:text-white'
                  }`}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

TimeSelector.displayName = 'TimeSelector';

