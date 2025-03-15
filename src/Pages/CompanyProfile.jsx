import AboutCompany_SocialMedia from "../Components/AboutCompany_SocialMedia";
import CompanyProfileSection from "../Components/CompanyProfileSection";

const CompanyProfile = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <CompanyProfileSection />
      <AboutCompany_SocialMedia />
    </div>
  );
};

export default CompanyProfile;
