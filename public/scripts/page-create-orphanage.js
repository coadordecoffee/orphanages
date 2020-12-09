//create map
const map = L.map('mapid').setView([-15.8000871, -47.8927741], 13)

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('input[name=lat]').value = lat;
    document.querySelector('input[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)

})

//add photo field
function addPhotoField(){
    //get photo container #images
    const container = document.querySelector('#images')
    //get container to dupe .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //clone last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verify if field is empty, if yes, dont add to image container
    const input  = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //clear field before adding to image container
    input.value = ""
    //add clone to image container
    container.appendChild(newFieldContainer)
}
//delete photo field
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2){
        //clear field value
        span.parentNode.children[0].value=""
        return
    }
    //delete field    
    span.parentNode.remove();
}

//select yes or no 
function toggleSelect(event){
    //remove .active class in clicked button
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    //place .active class in clicked button
    const button = event.currentTarget
    button.classList.add('active')

    //update hidden input with selected value
    const input = document.querySelector('[name=open_on_weekends]')
    
    //verify yes or no
    input.value = button.dataset.value
}

//function validate(event){

    //validate if lat lng is filled
//    const needsLatAndLng = true;
//   if(needsLatAndLng){
//        event.preventDefault()
//        alert('Selecione um ponto no mapa')
//    }
    
//}