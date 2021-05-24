export const VERSION = '1.0';
export const PRIMARY_BUTTON = 'PRIMARY_BUTTON';
export const SECONDARY_BUTTON = 'SECONDARY_BUTTON';

export const IMAGE_PICKER_OPTIONS = {
  chooseFromLibraryButtonTitle: 'Seleccionar de libreria',
  takePhotoButtonTitle: 'Tomar una foto',
  cancelButtonTitle: 'Cancelar',
  title: 'Seleccionar Imagen',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  permissionDenied: {
    title: 'Permisos denegados',
    text: 'Debes darle acceso a tu aplicación a los permisos de la camara',
    reTryTitle: 'Ir a permisos',
    okTitle: 'Cerrar',
  },
  maxWidth: 2000,
  maxHeight: 2000,
  quality: 0.8,
};

export const supportQuestions = [
  {
    label: 'GENERAL',
    questions: [
      {
        label: 'No puedo cambiar mis datos',
        info: 'Para cambiar tu contraseña, debes dirigerte a la sección MI CUENTA ubicada en el menú de navegación lateral. Ve AJUSTES y selecciona cambiar contraseña, escribe la nueva contraseña. Recuerda GUARDAR al terminar.',
      },
      {
        label: 'Necesito cambiar mi contraseña',
        info: `Para cambiar tu contraseña, debes dirigirte a la sección MI CUENTA ubicada en el menú de navegación lateral. Ve a AJUSTES y selecciona la opción cambiar contraseña. Escribe la nueva contraseña. Recuerda GUARDAR al terminar.
          .`,
      },
      {
        label: 'Cómo puedo cambiar mi avatar',
        info: `Para cambiar tu avatar debes dirigirte a la sección MI CUENTA ubicada en el menú de navegación lateral. Selecciona la imagen de una cámara fotográfica en la imagen del centro. Selecciona la opción que prefieras: tomar foto o selecciona de la galería. Por último elige la imagen que desees.
          `,
      },
      {
        label: 'El pago aún no llega a mi cuenta',
        info: 'Dirígete al menú HISTORIAL en la parte inferior izquierda de la pantalla. Verifica el estado del pago de tu viaje. En caso de inconformidad con la información, puedes comunicarte al correo ecocargapp@gmail.com',
      },
    ],
  },
  {
    label: 'SOY TRANSPORTADOR',
    questions: [
      {
        label: 'Tengo problemas con mi carga',
        info: 'Dirígete al menú HISTORIAL ubicado en la esquina inferior izquierda de la pantalla, selecciona el viaje con el cual tienes problema y oprime el botón de reportar incidencia identificado por un signo de admiración de color rojo. Describe la incidencia y espera que nos comuniquemos contigo. Si tienes alguna duda del reporte puedes comunicarte también al correo ecocargapp@gmail.com',
      },
      {
        label: 'No encuentro el lugar de carga ',
        info: 'La aplicación te lleva directamente al lugar donde debes recoger la carga. Si ya se encuentra en el sitio que indica el mapa y no ve el lugar correspondiente, contactar al generador de carga como primera opción, o escribir al correo ecocargaap@gmail.com',
      },
      {
        label: 'No encuentro el lugar de descarga',
        info: 'La aplicación te lleva directamente al lugar donde debes descargar. Si ya se encuentra en el sitio que indica el mapa y no ve el lugar correspondiente, contactar al generador de carga como primera opción, o escribir al correo ecocargapp@gmail.com',
      },
      {
        label: 'La carga es superior a lo permitido',
        info: 'El manifiesto de carga es expedido automáticamente por la aplicación, de acuerdo a los papeles del vehículo. Por lo tanto, solo se podrá cargar lo que este especificado en el manifiesto.',
      },
    ],
  },
  {
    label: 'SOY GENERADOR DE CARGA',
    questions: [
      {
        label: 'Tengo problemas con mi carga',
        info: 'Revisa el estado de tu carga, si el vehículo se encuentra en ruta, puedes ver en el mapa el lugar exacto en el que se encuentra. En caso de tener alguna de la ubicación del conductor, puedes comunicarte directamente con él, si no obtienes respuesta, puedes comunicarte al correo ecocargapp@gmail.com.',
      },
      {
        label: 'El transportador no llegó',
        info: 'Revisa los horarios que pusiste en la solicitud de carga para la recogida, para garantizar que son los correctos, si todo esta bien, y el conductor no ha llegado, puedes comunicarte directamente con el conductor, en caso de no obtener respuesta, puedes comunicarte al correo ecocargapp@gmail.com.',
      },
      {
        label: 'Aún no llega mi carga al destino',
        info: 'Revisa los horarios que pusiste en la solicitud de carga para el descargue, para garantizar que son los correctos, si todo esta bien, y el conductor no ha llegado, puedes comunicarte directamente con el conductor, en caso de no obtener respuesta, puedes comunicarte al correo ecocargapp@gmail.com.',
      },
    ],
  },
];

export const API_KEY = 'AIzaSyCTXhbJHnbd38Tu6M7c_9wu5V1q6UrocO8';

export const version = '2.0.8';
