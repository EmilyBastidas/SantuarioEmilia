import React from "react";
import CatCard from "../components/CatCards";

// Datos de ejemplo - luego pasar desde la api que voy a crear a la medida
const cats = [
  {
    name: "Simba",
    age: "3 años",
    gender: "Macho",
    breed: "Naranja atigrado",
    description:
      "Simba es un guerrero: sobrevivió a una fractura grave y ahora busca un hogar lleno de mimos. ¡Es muy cariñoso y juguetón!",
    imageUrl:
      "https://s.yimg.com/ny/api/res/1.2/5E0MkMghquKKZi0Tx58wlQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIxNzA7aD0xNjAwO2NmPXdlYnA-/https://media.zenfs.com/en/pethelpful_915/cfa4692837b16b681f66618a84b77168",
    status: "En tratamiento",
  },
  {
    name: "Luna",
    age: "2 años",
    gender: "Hembra",
    breed: "Tricolor",
    description:
      "Luna llegó muy tímida, pero con amor se ha convertido en una reina del ronroneo. Le encanta dormir en regazos.",
    imageUrl:
      "https://c8.alamy.com/comp/W4EK2E/cute-young-orange-tabby-cat-kitten-rescue-wearing-blue-and-white-poka-dotted-bow-tie-sitting-looking-to-the-right-on-a-blue-background-W4EK2E.jpg",
    status: "Adoptable",
  },
  {
    name: "Pelusa",
    age: "1 año",
    gender: "Hembra",
    breed: "Blanca con manchitas",
    description:
      "Pelusa es una bolita de energía. Le encanta jugar con plumas y perseguir rayos de sol. ¡Ideal para familias activas!",
    imageUrl:
      "https://as1.ftcdn.net/jpg/03/72/20/36/1000_F_372203643_YcfSt9c6NINUdTFxv421VE81RJqWcp50.jpg",
    status: "Adoptable",
  },
  {
    name: "Milo",
    age: "4 meses",
    gender: "Macho",
    breed: "Naranja bebé",
    description:
      "Milo es un cachorrito rescatado de la calle. Aún está aprendiendo a confiar, pero ya da besitos en la nariz.",
    imageUrl:
      "https://external-preview.redd.it/300-cat-sanctuary-in-romania-v0-eejyinmsSfEa03wPZ8lLpZsCbTh8JNuuSpQvEIEPNos.png?format=pjpg&auto=webp&s=f4b9257594e7327cacecae3a32c9c0affaf991e5",
    status: "Especial",
  },
];

function Gatitos() {
  return (
    <>
      {/* título */}
      <section className="py-5 bg-light text-center">
        <div className="container-fluid px-3 px-md-5 m-4">
          <h1 className="mb-4 mt-4 fw-bold">Nuestros Gatitos</h1>
          <p className="lead text-muted">
            Conoce a los rescatados que están esperando un hogar lleno de amor.
            ¡Cada uno tiene una historia única!
          </p>
        </div>
      </section>

      {/* grid de cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {cats.map((cat, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <CatCard
                  name={cat.name}
                  age={cat.age}
                  gender={cat.gender}
                  breed={cat.breed}
                  description={cat.description}
                  imageUrl={cat.imageUrl}
                  status={cat.status}
                />
              </div>
            ))}
          </div>

          {cats.length === 0 && (
            <div className="text-center py-5 text-muted">
              Estamos preparando más perfiles de gatitos... ¡Vuelve pronto!
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Gatitos;
