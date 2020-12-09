const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //insert data in table
    await saveOrphanage(db, {    
        lat: "-15.8000871", 
        lng: "-47.1927741",
        name: "Local de Paz",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "31312312",
        images:[
            "https://images.unsplash.com/photo-1604359026824-58a4755ad751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1598252976330-b8a1461d47a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        ].toString(),
        intructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })

    //consult data in table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //delete data from table
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))

    //consult a single orphanage by ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)
})