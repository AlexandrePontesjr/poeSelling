import { Eye, PencilLine, Trash2 } from "lucide-react";

//{`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
export default function ProductTableItem({isLast, name, price, image, status}) {
    return (
        <tr>
                        <td
                          class={`${ isLast ? " " : "border-b border-[#eee]" } px-4 py-5 pl-9 xl:pl-11`}
                        >
                          <h5 class="font-medium text-black ">{name}</h5>
                        </td>
                        <td class={`${ isLast ? " " : "border-b border-[#eee]" } px-4 py-5 `}>
                          <p class="text-black">$ {price}</p>
                        </td>
                        <td class={`${ isLast ? " " : "border-b border-[#eee]" } px-4 py-5`}>
                          <p
                            class="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-success"
                          >
                            <img src={image} alt={name} class="w-20 h-20 mr-2" />
                          </p>
                        </td>
                        <td class={`${ isLast ? " " : "border-b border-[#eee]" } px-4 py-5`}>
                          <div class="flex items-center space-x-3.5">
                            <button class="hover:text-primary">
                              <Eye className="w-6 h-6"/>
                            </button>
                            <button class="hover:text-primary">
                              <PencilLine className="w-6 h-6"/>
                            </button>
                            <button class="hover:text-primary">
                              <Trash2 className="w-6 h-6"/>
                            </button>
                          </div>
                        </td>
                      </tr>
    );
}