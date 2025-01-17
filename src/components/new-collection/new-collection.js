import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
import Items from "../accessories/accessories";
const NewCollection = () => {
  const cards_info = [
    {
      id: "polo-shirt",
      image:
        "https://images.unsplash.com/photo-1715269291602-ff0717634b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvbG8lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Loro Piana",
      subTitle: "Slim-Fit Striped Silk and Linen-Blend Polo Shirt",
      price: 45,
    },
    {
      id: "men-pants",
      image:
        "https://encrypted-tbn0.gstatic.com/images?w=500&auto=format&fit=crope&q=tbn:ANd9GcTKM3KQHJV_U6x2GLKrpkldxRCI8vIl9LAEzYQuvQa96KIpEeLHR3P5xCljM_9V2zj_-F8&usqp=CAU",
      title: "White Pants",
      subTitle: "Slim Fit men pants",
      price: 90,
    },
    {
      id: "glasses",
      image:
        "https://images.unsplash.com/photo-1570993492880-e8b3bfd5e100?h=450&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bidha Glasses",
      subTitle: "Black Glasses with luxury finishing",
      price: 50,
    },
    {
      id: "bomber-jacket",
      image:
        "https://images.unsplash.com/photo-1508213549911-bb8ac124d13f?h=450&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvbWJlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Brown Bomber",
      subTitle: "Luxury unisex bomber jacket",
      price: 52,
    },
    {
      id: "leather-shoes",
      image:
        "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?h=450&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fHww",
      title: "Leather Shoes Jack",
      subTitle: "Men leather shoes",
      price: 89,
    },
    {
      id: "grey-tshirt",
      image:
        "https://media.istockphoto.com/id/184647534/photo/happy-smiling-young-man-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=OMi7EC9zH6O7FCtOfWl4vWekUbiSM1PnlhbJ0uiTQv0=",
      title: "Grey Tshirt",
      subTitle: "Unisex grey tshirt",
      price: 21,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <div>
              <Cards
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                sub_title={item.subTitle}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
