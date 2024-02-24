import Swal from 'sweetalert2';
const useAlerts = () =>{

    const ToastInformation = Swal.mixin({
        toast: true,
        title: 'Resultado del proceso:',
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast:any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const ToastConfirmation= Swal.mixin({
        toast: true,
        title: 'Confirmación requerida.',
        icon: 'warning',
        position: 'top-end',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#303840',
        confirmButtonText: 'Confirmar!'            
    })  

    const ToastAuthentication = Swal.mixin({
        footer: 'App Sas.',
        title: 'Procesando información.',
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast:any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            Swal.showLoading()            
        }
    })

    const resolveToast:any = {

        'external_error': {value:'Ocurrio un error atipico, por favor contacta con el administador llegase a perdurar el error.',icon:'error'},
        'unauthorized': {value:'Las credenciales enviadas no cuentan con los permisos necesarios para realizar esta acción.',icon:'error'},

        //Errores
        'not_found': {value:'El registro o registros solicitados no registran en el sistema, por favor valida nuevamente.',icon:'error'},
        'process_insufficient': {value:'La autorización debe tener al menos un proceso, por lo cual no se puede eliminar la actual.',icon:'error'},
        'is_used': {value:'El registro indicado cuenta con contratos ya parametrizadas, por lo cual no se puede eliminar.',icon:'error'},
        'incorrect_fields': {value:'Los campos registrados no estan correctamente diligenciados, por favor valida nuevamente la información.',icon:'error'},
        'password_is_used': {value:'La contraseña nueva ya fue utilizada en las ultimas ocasiones, por favor selecciona una diferente.',icon:'error'},
        'client_not_found': {value:'El código indicado no corresponde a ningun cliente, por favor valida nuevamente o consulta con el amdinistrador.',icon:'error'},
        'provider_already_exists': {value:'Los datos informados ( Documento y Razon social ) ya se encuentran registrados en la plataforma de proveedores.',icon:'error'},
        'request_sender': {value:'La solicitud ya fue enviada al administrador de plataforma, una vez verificado se actualizaran tus credenciales.',icon:'error'},
        'user_not_found': {value:'El correo indicado no se encuentra creado, por favor valida nuevamente.',icon:'error'},
        'mail_is_register': {value:'El correo indicado ya se encuentra creado en nuestro sistema, por favor ingresa por "olvidaste tu contraseña" o contacta con el administrador.',icon:'error'},
        'code_is_used': {value:'El codígo de cliente indicado ya se encuentra registrado para otro cliente, por favor intente con otro.',icon:'error'},
        'code_not_found': {value:'Credeciales no autenticadas, por favor valida nuevamente el link remitido del correo o solicite nuevamente el registro.',icon:'error'},
        'it_already_exists': {value:'El registro indicado ya existe con los datos proporcionados, por favor valida nuevamente, en caso de estar inactiva se realiza la activación.',icon:'error'},
        'password_is_incorrect': {value:'La contraseña antigua no corresponde, por favor valida nuevamente.',icon:'error'},
        'date_error_less': {value:'La fecha de finalización del acuerdo de pago debe ser superior a la fecha inicial.',icon:'error'},

        
        //Correctas
        'created': {value:'El registro solicitado se ha creado de forma exitosa.',icon:'success'},
        'activated': {value:'El registro solicitado se activa de manera exitosa.',icon:'success'},
        'deleted': {value:'El registro indicado se inactiva de manera exitosa.',icon:'success'},
        'created_mail': {value:'El código se envio correctamente al correo registrado.',icon:'success'},
        'updated_mail': {value:'El código se envia nuevamente al correo registrado, por favor valida en el correo ingresado.',icon:'success'},
        'updated': {value:'La actualización de los datos se ha completado con éxito. Tus cambios han sido guardados correctamente.',icon:'success'},
        'authenticated': {value:'Te has autenticado con éxito en el sistema. ¡Bienvenido!',icon:'success'},
        'activated_again': {value:'La solicitud de activación se ha completado con éxito. El registro ya se encontraba creado previamente.', icon:'success'},
        'verify': {value:'Proceso realizado correctamente, por favor ingrese con las credenciales asignadas.',icon:'success'},
        'edited': {value:'El registro ha sido modificado satisfactoriamente. Los cambios se han guardado con éxito.',icon:'success'},


        //Errores
 
        
    };


    return{
        resolveToast,
        ToastInformation,
        ToastConfirmation,
        ToastAuthentication,
    }
}

export default useAlerts