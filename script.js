const countries = [
    { name: "Brasil", timezone: "America/Sao_Paulo" },
    { name: "Estados Unidos (Nova York)", timezone: "America/New_York" },
    { name: "Reino Unido", timezone: "Europe/London" },
    { name: "Japão", timezone: "Asia/Tokyo" },
    { name: "Austrália", timezone: "Australia/Sydney" },
    { name: "Índia", timezone: "Asia/Kolkata" },
    { name: "China", timezone: "Asia/Shanghai" },
    { name: "Rússia", timezone: "Europe/Moscow" },
    { name: "África do Sul", timezone: "Africa/Johannesburg" },
];

const countrySelect = document.getElementById("country-select");
const countryName = document.getElementById("country-name");
const localTime = document.getElementById("local-time");
const timezone = document.getElementById("timezone");

// Popula o select com os países
countries.forEach((country, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = country.name;
    countrySelect.appendChild(option);
});

// Atualiza os detalhes quando um país é selecionado
countrySelect.addEventListener("change", () => {
    const selectedCountry = countries[countrySelect.value];
    if (selectedCountry) {
        countryName.textContent = selectedCountry.name;
        timezone.textContent = selectedCountry.timezone;

        updateTime(selectedCountry.timezone);
    } else {
        countryName.textContent = "--";
        localTime.textContent = "--";
        timezone.textContent = "--";
    }
});

// Atualiza o horário em tempo real
function updateTime(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("pt-BR", {
        timeZone: timezone,
        dateStyle: "full",
        timeStyle: "medium",
    });
    localTime.textContent = formatter.format(now);

    // Atualiza o horário a cada segundo
    setTimeout(() => updateTime(timezone), 1000);
}

// Inicializa com o primeiro país na lista
if (countries.length > 0) {
    countrySelect.value = 0;
    countrySelect.dispatchEvent(new Event("change"));
}
