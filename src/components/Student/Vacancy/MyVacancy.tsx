import React, { useEffect, useState } from 'react';
import Navbar from '../NavbarStudent';
import { Link } from 'react-router-dom';

const JobCard = ({ company, name, imageUrl }) => {
  return (
    <div className='bg-transparent m-3'>
      <div className="max-w-md mx-auto p-4 rounded-xl shadow-xl mb-4 flex flex-col items-center h-[270px] w-[320px] pt-8">
        <img className="w-32 h-16 p-0 pb-3" src={imageUrl} alt={name} />
        <h2 className="text-xl">{name}</h2>
        <p className="mb-3">{company}</p>
        <Link
          className="bg-blue-400 text-white px-24 p-2 rounded-md hover:bg-blue-600 transition"
          to={''}
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
};

const JobList = ({ vagasCandidatadas }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const busca = async () => {
      const response = await fetch('api/jobs');
      const data = await response.json();
      setRepositories(data);
    };
    busca();
  }, []);

  const vagasFiltradas = repositories.filter((repo) =>
    vagasCandidatadas.includes(repo.id)
  );

  return (
    <section className="flex flex-wrap justify-center">
      {vagasFiltradas.length > 0 ? (
        <section>
          {vagasFiltradas.map((repo) => (
            <JobCard
              key={repo.id}
              company={repo.company}
              name={repo.name}
              imageUrl={repo.imageurl}
            />
          ))}
        </section>
      ) : (
        <p className='pt-4 text-xl'>Você ainda não se candidatou a nenhuma vaga</p>
      )}
    </section>
  );
};

const AllVacancy = () => {
  const vagasCandidatadas: never[] = [];

  return (
    <>
      <Navbar />
      <div className="flex pt-28 px-16">
        <div className="flex p-4"></div>
        <section className="flex-1 pl-28">
          <JobList vagasCandidatadas={vagasCandidatadas} />
        </section>
      </div>
    </>
  );
};

export default AllVacancy;


