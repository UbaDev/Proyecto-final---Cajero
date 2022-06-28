//Declare array and user's data

const usersList = [
   
    {
        userName: 'persona1',
        password: '123',
        nameUser: 'Mali',
        age: 45,
        balance: 200
    },
    {
        userName: 'persona2',
        password: '456',
        nameUser: 'Gera',
        age: 35,
        balance: 290
    },
    {
        userName: 'persona3',
        password: '789',
        nameUser: 'Maui',
        age: 29,
        balance: 67
    }
];

let loginForm = document.querySelector('#formAccount');
let btnBalance = document.querySelector('#btnDeposit');
let btnWithdraw = document.querySelector('#btnWithdraw');
let btnDeposit = document.querySelector('#btnDeposit');
boxAccount = document.getElementById('box-account');
const textAbout = document.querySelector('#textAbout');


loginForm.addEventListener('submit', (e) => {

    
    var userName = document.getElementById('txtUserName').value.toString();
    var userPassword = document.getElementById('txtPassword').value.toString();
    
    e.preventDefault();

    validarCredenciales(userName, userPassword);
});


function validarCredenciales(pUser, pPass){

    const userData = usersList.find(user => pUser == user.userName);
    if(userData){ 
        
        if(userData.password == pPass){
            
            localStorage.setItem('userInfo', JSON.stringify(userData));
            indicator = usersList.indexOf(userData);
            adminCuenta(indicator);

        }else{
            alert('La contraseña es incorrecta');
        }
    }else{
        alert('El usuario es incorrecto')
    }
    
    
}

function adminCuenta(indicator){
    console.log('hi')
    var opt = 1;
    while(opt == 1){
        let option = prompt('¿Qué acción desea realizar? \n 1. Consultar saldo \n 2. Depositar \n 3. Retirar \n 4. Salir');
        switch(option){
            case '1':
                alert('Su saldo actual es de: $' + usersList[indicator].balance + " pesos");
                opt = prompt('¿Le gustaria hacer otra operacion? \n 1. Sí \2 2. No');
            break;

            case '2':
                let deposito = Number(prompt('Digite el monto que desea ingresar a su cuenta '));
                    if(deposito == null || isNaN(deposito) == true || deposito <= 0){
                        alert('Los datos son invalidos, por favor intente de nuevo');
                        opt = 2;
                    }else{

                        var actualizaSaldo = usersList[indicator].balance + deposito;
                        if(actualizaSaldo <= 990){
                            alert('Su saldo actualizado es de: $' + actualizaSaldo + " pesos");
                            usersList[indicator].balance = actualizaSaldo;
                            opt = prompt('¿Le gustaria hacer otra operacion? \n 1. Sí \2 2. No');
                        }else{
                            alert('Lo sentimos, su cuenta no puede tener mas de $990 pesos');
                        }
                    }
            break;
        
            case '3':
                let retiro = Number(prompt('Ingrese el saldo a retirar: '));
                    if(retiro == null || isNaN(retiro) == true || retiro <= 0){
                        alert('Los datos son invalidos, por favor intente de nuevo');
                        opt = 2;
                    }else{
                        var balanceWith = usersList[indicator].balance - retiro;
                        if(balanceWith >= 10){
                            usersList[indicator].balance = balanceWith;
                            alert('Su saldo actual es de: $' + usersList[indicator].balance + " pesos");
                            opt = prompt('¿Le gustaria hacer otra operacion? \n 1. Sí \2 2. No');
                        }else if(balanceWith > 0 && balanceWith < 10){
                            alert('Lo sentimos, su cuenta tiene menos de $10 pesos');
                        }else if(balanceWith < 0){
                            alert('Tu cuenta tiene sobregiro');
                        }
                    }
            break;

            case '4':
                    alert('Gracias por utilizar su cajero virtual favorito');
                    opt= 2;
            break;

            default:
            alert('Opción invalida')
            opt = 2;
            break; 
        }
    }
    
    
}

