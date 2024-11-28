📖 How This Project Works 🇬🇧

The idea behind this project is to emulate a WordPress site.
This is not an eCommerce project!
The primary goal is to build a landing page where an anonymous user can publish reviews, and an admin can manage products and reviews via a custom dashboard.
✨ Main Features

    ⏱️ Dynamic timer based on an expiration date.
    ✍️ Anonymous users can submit reviews; admins can validate them later.
    📩 Option to subscribe to a newsletter service.
    🔒 Access the dashboard via the /admin route after logging in.
    🛒 Admins can create and manage products.
    ✅ Admins can validate reviews.

🚀 How to Start the Project

The project scaffolding includes dummy data to help you get started:

    Run database migrations:

php artisan migrate

Seed the database with dummy data:

    php artisan db:seed

This will provide the necessary data to explore the project.

⚠️ Note: The dashboard is intentionally hidden from the UI. Access it directly via /admin.

    Login credentials:
    Email: test@example.com
    Password: user

💡 Don't forget to seed the database, or the admin user won't exist!
🛠️ Technology Used

    ⚡ Laravel
    ⚛️ React with Headless UI
    🖇️ Inertia.js
    🛡️ Breeze for authentication
    🗄️ SQLite database

📖 Come Funziona Questo Progetto 🇮🇹

L'idea di questo progetto è emulare un sito WordPress.
Non si tratta di un progetto eCommerce!
L'obiettivo principale è costruire una landing page dove un utente anonimo può pubblicare recensioni e un amministratore può gestire prodotti e recensioni tramite un dashboard personalizzato.
✨ Funzionalità Principali

    ⏱️ Timer dinamico basato su una data di scadenza.
    ✍️ Gli utenti anonimi possono inviare recensioni, che l'amministratore può convalidare in seguito.
    📩 Possibilità di iscriversi a un servizio di newsletter.
    🔒 Accesso al dashboard tramite la route /admin dopo il login.
    🛒 L'amministratore può creare e gestire prodotti.
    ✅ L'amministratore può convalidare recensioni.

🚀 Come Avviare il Progetto

Il progetto include dati di esempio per iniziare:

    Esegui le migrazioni del database:

php artisan migrate

Popola il database con dati di esempio:

    php artisan db:seed

⚠️ Nota: Il dashboard non è visibile nell'interfaccia del sito. Accedilo direttamente tramite /admin.

    Credenziali di accesso:
    Email: test@example.com
    Password: user

💡 Non dimenticare di popolare il database, altrimenti l'utente admin non sarà disponibile!
🛠️ Tecnologie Utilizzate

    ⚡ Laravel
    ⚛️ React con Headless UI
    🖇️ Inertia.js
    🛡️ Breeze per l'autenticazione
    🗄️ SQLite database