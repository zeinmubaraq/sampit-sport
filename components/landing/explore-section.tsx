import CardExplore from './explore-section/card-explore';

const ExploreSection = () => {
  return (
    <section className="mx-auto max-w-7xl py-16 px-2">
      <h2 className="mt-0 text-center text-6xl font-extrabold uppercase leading-none text-stone-800">
        Explore
      </h2>
      <div className="mt-14 grid grid-cols-3 gap-10">
        <CardExplore src="/assets/img/shoes.jpg" name="shoes" />
        <CardExplore src="/assets/img/shuttle.jpg" name="Shuttles" />
        <CardExplore src="/assets/img/bags.jpg" name="Bags" />
      </div>
    </section>
  );
};

export default ExploreSection;
