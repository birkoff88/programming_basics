function aquarium(length, width, height, percentage) {
    let aquariumVolume = length * width * height;
    let volumeInLiters = aquariumVolume / 1000;
    percentage = percentage / 100;
    let requiredLiters = volumeInLiters * (1 - percentage);

    console.log(requiredLiters);
}

aquarium(85, 75, 47, 17);
