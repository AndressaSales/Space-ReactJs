import Mercurio from "./Mercurio";
import Venus from "./Venus";
import Terra from "./Terra";
import Marte from "./Marte";
import Jupiter from "./Jupiter";
import Saturno from "./Saturno";
import Neturno from "./Neturno";
function Planetas(){
    return(
     <div>
           <div className="borda">
                <Mercurio />
                <Venus />
                <Terra />
                <Marte />
                <Jupiter />
                <Saturno />
                <Neturno />
            </div>
     </div>
    );
}
export default Planetas;