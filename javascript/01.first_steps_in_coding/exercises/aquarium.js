function aquarium(daljina, shirina, visochina, procenti) {
    obem_na_akvariuma = daljina * shirina * visochina;
    obem_v_litri = obem_na_akvariuma / 1000;
    procenti = procenti / 100;
    nujni_litri = obem_v_litri * (1 - procenti);
    console.log(nujni_litri);
}

aquarium(85,75,47,17);