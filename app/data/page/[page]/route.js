import axios from "axios";

export async function GET(req, {params}) {
  
  const page = params.page; // ← This will be 'homepage' in /api/page/homepage

  const response= await axios.get(`http:localhost:3001/api/homepage`);
  
  const data=response.data;

  // if (page === 'homepage') {
    
  //  const data=axios.get(`https://www.akv.org.in/api`);
    
  //   return res.status(200).json({ status:'success',data:data });

  // }

  let page_exists=false;

  switch(page){
    case 'homepage':
        page_exists=true;
    break;
    default:
        console.log('page does not exist');
        break;

  }

  

  if (page_exists) {
    
   
    
      return Response.json({
      status: 'success',
      data: data,
    });

  }



  return Response.json(
      { status:'error', message: 'Failed to fetch data' },
      { status: 500 }
    );

}