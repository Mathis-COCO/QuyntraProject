import React from "react";
import '../css/DeliveryReturns.scss';

const DeliveryReturns = () => {
    return (
        <div className='returns-card'>
            <p className='returns-title'>livraison et retours</p>
            <p className='returns-txt'>
                Transporteurs : Chronopost en France et UPS hors France <br /> <br />

                Modes de livraison : domicile ou point relais contre signature <br /> <br />

                Frais de livraison : <br />
                - Offerts dès 200€ d’achat en France, Belgique et Italie pour la livraison standard <br />
                - Offerts sans minimum d'achat en Allemagne pour la livraison standard <br />
                - Variables en fonction du pays de livraison pour les autres pays hors France. Pour plus d’informations, consultez l’ensemble des tarifs ici. <br /><br />
                Délais de livraison : <br />
                - 2 jours ouvrés pour les produits "Livraison express" <br />
                - 3 à 10 jours ouvrés pour les produits en "Livraison standard" <br />
            </p>
        </div>
    )
}

export default DeliveryReturns;