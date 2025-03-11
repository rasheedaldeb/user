import SingleEstateSectionContent from "./SingleEstateSectionContent";
import SingleEstateSectionImages from "./SingleEstateSectionImages/SingleEstateSectionImages";

const SingleEstateSection = () => {
  return (
    <section className="h- flex items-center justify-between p-10">
      <SingleEstateSectionImages />
      <SingleEstateSectionContent />
    </section>
  );
};

export default SingleEstateSection;
