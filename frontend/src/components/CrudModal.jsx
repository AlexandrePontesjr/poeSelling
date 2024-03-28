import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { createProduct } from "../api/products/products";
import Button from "./Button";
import { createQuestion } from "../api/qas/qas";
// eslint-disable-next-line react/prop-types
const CrudModal = ({ show, type, close, nameAction, entity }) =>
{

   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [image_url, setImageUrl] = useState("");
   // const [description, setDescription] = useState("");
   const [question, setQuestion] = useState("");
   const [answer, setAnswer] = useState("");

   useEffect(() => {
      const fetchEntity = async () => {
         if (entity != null) {
            setName(entity.name);
            setPrice(entity.price);
            setImageUrl(entity.image);
            setQuestion(entity.question);
            setAnswer(entity.answer);
         }
      };
      fetchEntity();
    });

   //TODO: Melhorar a experiencia do usuario, quando não tiver mais nada pra fazer kk
   // const handleClickOutside = (event) => {
      
   //    if (event.target.id == "outside") {
         
   //       close(nameAction ? nameAction : "close");
   //    }
   // };

   // useEffect(() => {
   //    document.addEventListener("click", handleClickOutside);

   //    return () => {
   //       document.removeEventListener("click", handleClickOutside);
   //    };
   // }, []);
   
   function getPrice() {
      console.log(price)
      if(Number(price))
         return price
      else
         return price.split("$")[1]
   }

   const rightToLeftFormatter = (value) => {
      if (!Number(value)) return '';

      console.log(value)
  
      let amount = '';
      if (amount.length > 2) {
        amount = parseInt(value).toFixed(2);
      } else {
        amount = (parseInt(value) / 100).toFixed(2);
      }
  
      return `${amount}`;
    };
    
    function handleSubmit() {
      console.log()
      type == "qa" ?
      createQuestion(
         {
            question: question,
            answer: answer
         }
      )
      :
      createProduct(
         {
            name: name,
            price: getPrice(),
            type: (type == "service" ? "SERVICE" : "ITEM"),
            description: "description",
            image: image_url,
            createdBy: localStorage.username
         }
      );
    }

   return (
      <>
       {
       show ?
       
    <div id="outside" className="flex absolute inset-0 z-0 flex-1 items-center justify-center">
               <div className="grid gap-4 w-full max-w-5xl z-10 bg-black">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                     <div className="flex flex-row items-center justify-between space-x-2 border-gray-200 rounded-lg p-4">
                        <h3 className="whitespace-nowrap text-white tracking-tight text-lg font-bold">
                        { nameAction }
                        </h3>
                        <X onClick={() => close()} className="text-sm text-white cursor-pointer text-muted-foreground" />
                     </div>
                     <div className="p-4">
                        { type == "qa" ?
                        <div className="grid gap-4">
                        <div className="grid gap-1.5"><label className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="name">
                           Question
                           </label>
                           { entity != null ? 
                              <input onChange={(e) => { setQuestion(e.target.value); entity.question = e.target.value}} className="flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="question" value={entity.question} placeholder="Enter the question" />
                              : 
                              <input onChange={(e) => setQuestion(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="question" placeholder="Enter the question" />
                           }
                        </div>
                        <div className="grid gap-1.5"><label className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="email">
                           Answer
                           </label>
                           { entity != null ?
                              <input onChange={(e) => { setAnswer(e.target.value); entity.answer = e.target.value}} className="flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="answer" value={entity.answer} placeholder="Enter the answer" type="text" />
                              : 
                              <input onChange={(e) => setAnswer(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="answer" placeholder="Enter the answer" type="text" />
                           }
                        </div>
                     </div>
                     :
                        <div className="grid gap-4">
                           <div className="grid gap-1.5"><label className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="name">
                              { type == "service" ? "Service Name" : "Product Name" }
                              </label>
                              { entity != null ?
                              <input onChange={(e) => { setName(e.target.value); entity.name = e.target.value}} className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" value={entity.name} placeholder="Enter the name" />
                              :
                              <input onChange={(e) => setName(e.target.value)} className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Enter the name" />
                              }
                           </div>
                           <div className="grid gap-1.5"><label className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="email">
                              Price
                              </label>
                              { entity != null ? 
                              <NumericFormat
                                 className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                 id="price"
                                 thousandSeparator={false}
                                 allowNegative={false}
                                 decimalScale={2}
                                 value={entity.price}
                                 prefix={'$'}
                                 type="text"
                                 placeholder="0.00"
                                 decimalSeparator="." 
                                 onChange={(e) => {setPrice(e.target.value); entity.price = e.target.value}}
                                 maxLength={8} 
                                 format={rightToLeftFormatter}
                              />
                              : 
                              <NumericFormat
                                 className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                 id="price"
                                 thousandSeparator={false}
                                 allowNegative={false}
                                 decimalScale={2}
                                 prefix={'$'}
                                 type="text"
                                 placeholder="0.00"
                                 decimalSeparator="." 
                                 onChange={(e) => setPrice(e.target.value)}
                                 maxLength={8} 
                                 format={rightToLeftFormatter}
                              />
                              }
                              
                           </div>
                           <div className="grid gap-1.5"><label className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="email">
                              Image URL
                              </label>
                              { entity != null ?
                              <input onChange={(e) => { setImageUrl(e.target.value); entity.image = e.target.value }} className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="image_url" value={entity.image} placeholder="http://yourimage.com" type="text" />
                              :
                              <input onChange={(e) => setImageUrl(e.target.value)} className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="image_url" placeholder="http://yourimage.com" type="text" />
                              }
                           </div>
                        </div>
                     }
                     </div>
                     <div className="flex items-center p-4 justify-between">
                     <Button onClickEvent={() => handleSubmit(type)} color={"bg-green-500"} textColor={"text-white"} className="w-full sm:w-auto" >{nameAction.split(" ")[0]}</Button>
                     <Button onClickEvent={() => close()} textColor={"text-white"} color={"bg-red-500"} className="w-full sm:w-auto" >Cancel</Button>
                     </div>
                  </div>
               </div>
            </div>
        : null
       }
      </>
    );
}

export default CrudModal;
