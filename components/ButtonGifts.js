'use client';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonGifts = ({ cbu, alias }) => {
    const handleCBU = () => {
        Swal.fire({
            title: 'Sigue los pasos para contribuir con tu regalo',
            html: `
        <div>
          <ol class="list-decimal">
            <li class="text-left mb-3">1. Hacé click en el CBU o en el ALIAS</li>
            <li class="text-left mb-3">2. En la sección de transferencias de tu banco pegá el CBU o el ALIAS</li>
            <li class="text-left mb-3">3. Realizá la transferencia</li>
            <li class="text-left mb-3">4. ¡Listo!</li>
          </ol>
          <button type="button" class="bg-cuaternario hover:bg-terciario transition-colors duration-300 mt-5 lg:px-10 px-1 py-3 rounded flex justify-center items-center hover:text-white gap-x-5 mx-auto w-full" id="copyCBU">
            ${cbu}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
          </button>
          <button type="button" class="bg-cuaternario hover:bg-terciario transition-colors duration-300 mt-5 lg:px-10 px-1 py-3 rounded flex justify-center items-center hover:text-white gap-x-5 mx-auto w-full" id="copyAlias">
            ${alias}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
          </button>
        </div>`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            icon: 'info',
            confirmButtonText: '¡Ya transferí!',
            cancelButtonText: 'Cerrar',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Gracias', 'Gracias por contribuir con tu regalo', 'success');
            }
        });

        const copyCBU = document.getElementById('copyCBU');
        const copyAlias = document.getElementById('copyAlias');

        copyCBU.addEventListener('click', () => {
            navigator.clipboard.writeText(cbu).then(() => {
                toast.success('¡CBU copiado en portapapeles!');
            });
        });
        copyAlias.addEventListener('click', () => {
            navigator.clipboard.writeText(alias).then(() => {
                toast.success('¡Alias copiado en portapapeles!');
            });
        });
    };

    return (
        <div className="flex justify-center items-center mt-10">
            <button
                id={"regalo-button"}
                type={"button"}
                onClick={handleCBU}
                className={"bg-cuaternario hover:bg-terciario hover:text-white transition-colors duration-300 px-10 py-3 rounded"}
            >
                Click aquí
            </button>
            <ToastContainer />
        </div>
    );
};

export default ButtonGifts;
