//exercise


let mtable=document.querySelector("#table");


    let info=[ {No:1, Address:"Washington, DC, USA", Distance:"227 mi",  Duration: "3 hours 54 mins"},
                {No:2, Address: "Philadelphia, PA, USA", Distance:" 94.6 mi",  Duration: "1 hour 44 mins"},
                {No:3, Address: "Santa Barbara, CA, USA",  Distance:"2,878 mi",  Duration: "1 day 18 hours"},
                {No:4, Address:  "Miami, FL, USA",Distance:"1,286 mi",  Duration: "18 hours 43 mins"},
                {No:5, Address:"Austin, TX, USA", Distance:"1,742 mi",  Duration: "1 day 2 hours"},
                {No:6, Address: "Napa County, CA, USA", Distance:"2,871 mi",  Duration: "1 day 18 hours"},
                ]
    

     let headers=["No","Address","Distance","Duration"] ;          
    
        let table=document.createElement('table');
        table.style.width="900px"
        table.style.height="400px"
        table.style.fontSize="25px",
        table.style.fontFamily='Montserrat','sans-serif';
        table.style.table="table-striped"
        
       
        let headerrow=document.createElement('tr');
       
        headers.forEach(headertext =>{
            let header=document.createElement('th');
            header.style.background="#ccc2c2"
         
            let textnode=document.createTextNode(headertext);
            header.appendChild(textnode);
            headerrow.appendChild(header);
        })

        table.appendChild(headerrow);

            info.forEach(e=>{
                let row=document.createElement('tr');
               

                Object.values(e).forEach(text=>{
                    let cell=document.createElement('td');
                    cell.style.background="#f5eeed"
                    let textnode=document.createTextNode(text);
                    cell.appendChild(textnode);
                    row.appendChild(cell);
                   
                })
                table.appendChild(row)
            });



        mtable.appendChild(table);

        // document.write(table)

    