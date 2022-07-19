/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
 Agustin Ivancich
 TP 4
 Div C

 */
function CalcularPrecio () 
{
    let lamparas;
    
    let precio;

    let porcentaje;

    let preciototal;

    let marca;

    let descuento;

    let preciodescuento;

    let ingresosbrutos;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    porcentaje = 0;

    if(marca == "ArgentinaLuz")
    {
        switch(lamparas)
        {
            case 1:
            case 2:
                porcentaje = 0;
                break;
            case 3:
                porcentaje = 15;
                break;
            case 4:
                porcentaje = 25;
                break;
            case 5:
                porcentaje = 40;
                break;
            default:
                porcentaje = 50;
                break;
        }
    }
    else
    {
        if(marca == "FelipeLamparas")
        {
            switch(lamparas)
            {
                case 1:
                case 2:
                    porcentaje = 0;
                    break;
                case 3:
                    porcentaje = 10;
                    break;
                case 4:
                    porcentaje = 25;
                    break;
                case 5:
                    porcentaje = 30;
                    break;
                default:
                    porcentaje = 50;
                    break;
            }
        }
        else
        {
            switch(lamparas)
            {
                case 1:
                case 2:
                    porcentaje = 0;
                    break;
                case 3:
                    porcentaje = 5;
                    break;
                case 4:
                    porcentaje = 20;
                    break;
                case 5:
                    porcentaje = 30;
                    break;
                default:
                    porcentaje = 50;
                    break;
            }
        }
    }

    preciototal = 35 * lamparas;
    
    descuento = preciototal * porcentaje/100;

    preciodescuento = preciototal - descuento;

    if(preciodescuento > 120)
    {
        ingresosbrutos = preciodescuento * 10/100;

        preciodescuento = preciodescuento + ingresosbrutos;

        alert("IIBB Usted pago " + ingresosbrutos);

    }

    document.getElementById("txtIdprecioDescuento").value = preciodescuento

    
    
    
    
    
    
    /*let lamparas;
    
    let precio;

    let porcentaje;

    let preciototal;

    let marca;

    let descuento;

    let preciodescuento;

    let ingresosbrutos;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    porcentaje = 0;

    if(lamparas >= 6)
    {
        porcentaje = 50;
    }
    else
    {
        if(lamparas == 5)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
        }
        else
        {
            if(lamparas == 4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentaje = 25;
                        break;
                    default:
                        porcentaje = 20;
                        break;
                }
            }
            else
            {
                if(lamparas == 3)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje = 15;
                            break;
                        case "FelipeLamparas":
                            porcentaje = 10;
                            break;
                        default:
                            porcentaje = 5;
                    }
                }
            }
        }
    }

    preciototal = 35 * lamparas;
    
    descuento = preciototal * porcentaje/100;

    preciodescuento = preciototal - descuento;

    ingresosbrutos = preciodescuento * 10/100;

    if(preciodescuento > 120)
    {
        preciodescuento + ingresosbrutos;
        alert("IIBB Usted pago " + ingresosbrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = preciodescuento*/
    
    
    
    
    
    
    /*let lamparas;
    
    let precio;

    let porcentaje;

    let preciototal;

    let marca;

    let descuento;

    let preciodescuento;

    let ingresosbrutos;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    porcentaje = 0;

    switch(marca)
    {
        case "ArgentinaLuz":
            if(lamparas >= 6)
            {
                porcentaje = 50;
            }
            else
            {
                if(lamparas == 5)
                {
                    porcentaje = 40;
                }
                else
                {
                    if(lamparas == 4)
                    {
                        porcentaje = 25;
                    }
                    else
                    {
                        if(lamparas == 3)
                        {
                            porcentaje = 15;
                        }
                    }
                }
            }
            break;
        case "FelipeLamparas":
            if(lamparas >= 6)
            {
                porcentaje = 50;
            }
            else
            {
                if(lamparas == 5)
                {
                    porcentaje = 30;
                }
                else
                {
                    if(lamparas == 4)
                    {
                        porcentaje = 25;
                    }
                    else
                    {
                        if(lamparas == 3)
                        {
                            porcentaje = 10;
                        }
                    }
                }
            }
            break;
        default:
            if(lamparas >= 6)
            {
                porcentaje = 50;
            }
            else
            {
                if(lamparas == 5)
                {
                    porcentaje = 30;
                }
                else
                {
                    if(lamparas == 4)
                    {
                        porcentaje = 20;
                    }
                    else
                    {
                        if(lamparas == 3)
                        {
                            porcentaje = 5;
                        }
                    }
                }
            }
    }

    preciototal = 35 * lamparas;
    
    descuento = preciototal * porcentaje/100;

    preciodescuento = preciototal - descuento;

    ingresosbrutos = preciodescuento * 10/100;

    if(preciodescuento > 120)
    {
        alert("IIBB Usted pago " + ingresosbrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = preciodescuento;*/
    
    
    
    
    
    
    /*let lamparas;
    
    let precio;

    let porcentaje;

    let preciototal;

    let marca;

    let descuento;

    let preciodescuento;

    let ingresosbrutos;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    porcentaje = 0;

    switch(lamparas)
    {
        case 1:
        case 2:
            porcentaje = 0;
            break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 15;
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    porcentaje = 10;
                }
                else
                {
                    porcentaje = 5;
                }
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 25;
            }
            else
            {
                porcentaje = 20;
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
            break;
        default:
            porcentaje = 50;
    }

    preciototal = 35 * lamparas;
    
    descuento = preciototal * porcentaje/100;

    preciodescuento = preciototal - descuento;

    ingresosbrutos = preciodescuento * 10/100;

    if(preciodescuento > 120)
    {
        alert("IIBB Usted pago " + ingresosbrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = preciodescuento*/
    
    
    
    
    /*let lamparas;
    
    let precio;

    let porcentaje;

    let preciototal;

    let marca;

    let descuento;

    let preciodescuento;

    let ingresosbrutos;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    porcentaje = 0;

    switch(marca)
    {
        case "ArgentinaLuz":
            switch(lamparas)
            {
                case 1:
                case 2:
                    porcentaje = 0;
                    break;
                case 3:
                    porcentaje = 15;
                    break;
                case 4:
                    porcentaje = 25;
                    break;
                case 5:
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 50;
            }
            break;
            case "FelipeLamparas":
                switch(lamparas)
                {
                    case 1:
                    case 2:
                        porcentaje = 0;
                        break;
                    case 3:
                        porcentaje = 10;
                        break;
                    case 4:
                        porcentaje = 25;
                        break;
                    case 5:
                        porcentaje = 30;
                        break;
                    default:
                        porcentaje = 50;
                }
                break;
            default:
                switch(lamparas)
                {
                    case 1:
                    case 2:
                        porcentaje = 0;
                        break;
                    case 3:
                        porcentaje = 5;
                        break;
                    case 4:
                        porcentaje = 20;
                        break;
                    case 5:
                        porcentaje = 30;
                        break;
                    default:
                        porcentaje = 50;
                }
    }

    preciototal = 35 * lamparas;
    
    descuento = preciototal * porcentaje/100;

    preciodescuento = preciototal - descuento;

    ingresosbrutos = preciodescuento * 10/100;

    if(preciodescuento > 120)
    {
        alert("IIBB Usted pago " + ingresosbrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = preciodescuento*/
    
    
    
    
    
    /*let lamparas;
    
    let precio;

    let porcentaje;

    let preciototal;

    let marca;

    let descuento;

    let preciodescuento;

    let ingresosbrutos;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    porcentaje = 0;

    switch(lamparas)
    {
        case 1:
        case 2:
            porcentaje = 0;
            break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 15;
                    break;
                case "FelipeLamparas":
                    porcentaje = 10;
                    break;
                default:
                    porcentaje = 5;
            }
            break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje = 20;
            }
            break;
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
            }
            break;
        default:
            porcentaje = 50;
    }

    preciototal = 35 * lamparas;

    descuento = preciototal * porcentaje/100;

    preciodescuento = preciototal - descuento;

    ingresosbrutos = preciodescuento * 10/100;

    if(preciodescuento > 120)
    {
        alert("IIBB usted pago " + ingresosbrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = preciodescuento;*/
    
    
    
    
    
    /*let lamparas;

 	let precio;

    let porcentaje;

    let preciototal;

    let marca;

    let descuento;

    let preciodescuento;

    let ingresosbrutos;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    porcentaje = 0;

    if(lamparas >= 6)
    {
        porcentaje = 50;
    }
    else
    {
        if(lamparas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        }
        if(lamparas == 4)
        {
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 25;
            }
            else
            {
                porcentaje = 20;
            }
        }
        if(lamparas == 3)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 15;
            }
            if(marca == "FelipeLamparas")
            {
                porcentaje = 10;
            }
            if(marca !="ArgentinaLuz" && marca!="FelipeLamparas")
            {
                porcentaje = 5;
            }
        }
    }

    preciototal = 35 * lamparas;
    
    descuento = preciototal * porcentaje/100;

    preciodescuento = preciototal - descuento;

    ingresosbrutos = preciodescuento * 10/100;

    if(preciodescuento > 120)
    {
        alert("IIBB Usted pago " + ingresosbrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = preciodescuento;*/

}
