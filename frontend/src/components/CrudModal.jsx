import { X } from "lucide-react";
import { NumericFormat } from "react-number-format";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const CrudModal = ({ show, type, close, nameAction }) =>
{

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

   return (
      <>
       {
       show ?
       
    <div id="outside" className="flex absolute inset-0 z-0 flex-1 items-center justify-center">
               <div className="grid gap-4 w-full max-w-5xl z-10 bg-white">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                     <div className="flex flex-row items-center justify-between space-x-2 border-gray-200 rounded-lg p-4">
                        <h3 className="whitespace-nowrap tracking-tight text-lg font-bold">
                        { nameAction }
                        </h3>
                        <X onClick={() => close()} className="text-sm cursor-pointer text-muted-foreground" />
                     </div>
                     <div className="p-4">
                        { type == "qa" ?
                        <div className="grid gap-4">
                        <div className="grid gap-1.5"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="name">
                           Question
                           </label><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="question" placeholder="Enter the question" />
                        </div>
                        <div className="grid gap-1.5"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="email">
                           Answer
                           </label><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="answer" placeholder="Enter the answer" type="text" />
                        </div>
                     </div>
                     :
                        <div className="grid gap-4">
                           <div className="grid gap-1.5"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="name">
                              { type == "service" ? "Service Name" : "Product Name" }
                              </label><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Enter the name" />
                           </div>
                           <div className="grid gap-1.5"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="email">
                              Price
                              </label>
                              <NumericFormat
                                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                 id="price"
                                 thousandSeparator={false}
                                 allowNegative={false}
                                 decimalScale={2}
                                 prefix={'$'}
                                 type="text"
                                 placeholder="0.00"
                                 decimalSeparator="." 
                                 maxLength={8} 
                                 format={rightToLeftFormatter}
                              />
                           </div>
                           <div className="grid gap-1.5"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm" htmlFor="email">
                              Image URL
                              </label><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="image_url" placeholder="http://yourimage.com" type="text" />
                           </div>
                        </div>
                     }
                     </div>
                     <div className="flex items-center p-4 justify-between">
                     <Button color={"bg-green-500"} className="w-full sm:w-auto" >{nameAction.split(" ")[0]}</Button>
                     <Button onClickEvent={() => close()} color={"bg-red-500"} className="w-full sm:w-auto" >Cancel</Button>
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
