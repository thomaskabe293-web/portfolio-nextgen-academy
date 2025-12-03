document.addEventListener('DOMContentLoaded', () => {
    // SCRIPT POUR GÉRER L'AFFICHAGE DU CONTENU
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentDetails = document.querySelectorAll('.content-detail');
    
    // NOUVEAU : Pour gérer l'effet Accordéon
    const accordionHeaders = document.querySelectorAll('.accordion-header'); 

    // 1. GESTION DE L'ACCORDÉON (Niveau 2 : FÒMASYON, SÈVIS, PROGRAM)
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Fermer tous les autres accordéons
            accordionHeaders.forEach(h => {
                if (h !== header) {
                    h.classList.remove('active-accordion');
                    const contentToClose = document.getElementById(h.getAttribute('data-target'));
                    contentToClose.classList.remove('open');
                }
            });

            // Basculer l'accordéon actuel
            header.classList.toggle('active-accordion');
            targetContent.classList.toggle('open');
        });
    });

    // 2. GESTION DU CHANGEMENT DE CONTENU (Niveau 3 : Fòmasyon atistik, etc.)
    const activateContent = (targetId) => {
        // Masquer/Afficher le contenu de droite
        contentDetails.forEach(content => {
            content.classList.add('hidden');
        });
        const targetContent = document.getElementById(`content-${targetId}`);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
        
        // Mettre en surbrillance le lien cliqué
        sidebarLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        const targetLink = document.querySelector(`.sidebar-link[data-content="${targetId}"]`);
        if (targetLink) {
            targetLink.classList.add('active-link');
        }
    };

    // 3. Attacher l'événement au clic sur les liens du dashboard (Niveau 3)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const contentId = link.getAttribute('data-content');
            activateContent(contentId);
            
            // S'assurer que l'accordéon correspondant au lien reste ouvert
            const currentAccordion = link.closest('.accordion-content');
            const currentHeader = document.querySelector(`.accordion-header[data-target="${currentAccordion.id}"]`);
            if (currentHeader && !currentHeader.classList.contains('active-accordion')) {
                currentHeader.classList.add('active-accordion');
                currentAccordion.classList.add('open');
            }
        });
    });

    // 4. Initialisation: Afficher le premier onglet (Art) au chargement
    activateContent('art');
});
