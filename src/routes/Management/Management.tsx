import Nav from "../../common/components/Nav";
import PostSection from "./layouts/PostSection";
import Products from "./layouts/Products";

export default function Management() {

    function getId(){
        
    }

    return (
        <main>
            <Nav menuOption="Home" link=""/>
            <Products />
            <PostSection />
        </main>
    );
}
