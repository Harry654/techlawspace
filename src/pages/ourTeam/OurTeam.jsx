import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Team from "../../components/Team/Team";

function OurTeam() {
  const members = [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit pretium orci, non tristique sapien odio ut felis.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit pretium orci, non tristique sapien odio ut felis.",
    },
    {
      name: "Bob Johnson",
      position: "Marketing Director",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit pretium orci, non tristique sapien odio ut felis.",
    },
    {
      name: "Sarah Lee",
      position: "Sales Manager",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit pretium orci, non tristique sapien odio ut felis.",
    },
    {
      name: "Tom Wilson",
      position: "Product Manager",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit pretium orci, non tristique sapien odio ut felis.",
    },
    {
      name: "Emily Davis",
      position: "Customer Support",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit pretium orci, non tristique sapien odio ut felis.",
    },
    {
      name: "Mark Brown",
      position: "Developer",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit pretium orci, non tristique sapien odio ut felis.",
    },
    {
      name: "Linda Kim",
      position: "Designer",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit nibh ut massa scelerisque, vitae blandit turpis mattis. Sed convallis, augue at bibendum tincidunt, justo velit",
    },
  ];

  return (
    <div>
      <NavBar currentPage="our-team" />
      <div className="background">
        <div id="site-content">
          <main className="main-content">
            <div className="hero" style={{ background: "rgba(0, 0, 0, .7)" }}>
              <div className="container">
                <div className="row">
                  {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
                  <Team members={members} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
