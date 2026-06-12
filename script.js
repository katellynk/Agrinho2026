function mostrarDetalhes(pilar) {
    const textoDinamico = document.getElementById('texto-dinamico');
    
    if (pilar === 'tecnologia') {
        textoDinamico.innerHTML = "💡 **Impacto da Tecnologia:** Reduz em até 30% o uso de defensivos agrícolas e economiza milhares de litros de água por hectare!";
    } else if (pilar === 'preservacao') {
        textoDinamico.innerHTML = "🌱 **Impacto da Preservação:** O plantio direto evita a erosão do solo e mantém os nutrientes naturais da terra por muito mais tempo.";
    } else if (pilar === 'energia') {
        textoDinamico.innerHTML = "☀️ **Impacto da Energia Limpa:** Fazendas que usam energia solar geram sua própria eletricidade e reduzem a emissão de gases estufa.";
    }
}
