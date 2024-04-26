import { NumericFormat } from "react-number-format";

const rightToLeftFormatter = (value) => {
  if (!Number(value)) return "";

  console.log(value);

  let amount = "";
  if (amount.length > 2) {
    amount = parseInt(value).toFixed(2);
  } else {
    amount = (parseInt(value) / 100).toFixed(2);
  }

  return `${amount}`;
};

const ProductFields = ({
  entity,
  setName,
  setDescription,
  setPrice,
  setImageUrl,
  type,
}) => {
  return (
    <div className="grid gap-4">
      <div id="name" className="grid gap-1.5">
        <label
          className="font-medium text-white  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[16px] font-poppins"
          htmlFor="name"
        >
          {type == "service" ? "Service Name" : "Product Name"}
        </label>
        {entity != null ? (
          <input
            onChange={(e) => {
              setName(e.target.value);
              entity.name = e.target.value;
            }}
            className="flex h-10 w-full bg-slate-800 text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            value={entity.name}
            placeholder="Enter the name"
          />
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            className="flex h-10 w-full bg-slate-800 text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            placeholder="Enter the name"
          />
        )}
      </div>
      <div id="description" className="grid gap-1.5">
        <label
          className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
          htmlFor="name"
        >
          {type == "service" ? "Service Description" : "Product Description"}
        </label>
        {entity != null ? (
          <input
            onChange={(e) => {
              setDescription(e.target.value);
              entity.description = e.target.value;
            }}
            className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="description"
            type="text"
            value={entity.description}
            placeholder="Enter the description"
          />
        ) : (
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="flex h-10 w-full bg-black text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="description"
            type="text"
            placeholder="Enter the description"
          />
        )}
      </div>
      <div id="price" className="grid gap-1.5">
        <label
          className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
          htmlFor="email"
        >
          Price
        </label>
        {entity != null ? (
          <NumericFormat
            className="flex h-10 w-full bg-slate-800 text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="price"
            thousandSeparator={false}
            allowNegative={false}
            decimalScale={2}
            value={entity.price}
            prefix={"$"}
            type="text"
            placeholder="0.00"
            decimalSeparator="."
            onChange={(e) => {
              setPrice(e.target.value);
              entity.price = e.target.value;
            }}
            maxLength={8}
            format={rightToLeftFormatter}
          />
        ) : (
          <NumericFormat
            className="flex h-10 w-full bg-slate-800 text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="price"
            thousandSeparator={false}
            allowNegative={false}
            decimalScale={2}
            prefix={"R$"}
            type="text"
            placeholder="0.00"
            decimalSeparator="."
            onChange={(e) => setPrice(e.target.value)}
            maxLength={8}
            format={rightToLeftFormatter}
          />
        )}
      </div>
      <div id="image_url" className="grid gap-1.5">
        <label
          className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
          htmlFor="email"
        >
          Image URL
        </label>
        {entity != null ? (
          <input
            onChange={(e) => {
              setImageUrl(e.target.value);
              entity.image = e.target.value;
            }}
            className="flex h-10 w-full bg-slate-800 text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="image_url"
            value={entity.image}
            placeholder="http://yourimage.com"
            type="text"
          />
        ) : (
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex h-10 w-full bg-slate-800 text-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="image_url"
            placeholder="http://yourimage.com"
            type="text"
          />
        )}
      </div>
    </div>
  );
};

export default ProductFields;
