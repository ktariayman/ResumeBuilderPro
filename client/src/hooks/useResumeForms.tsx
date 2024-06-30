import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResumeForm } from '../resume/ResumeBuilder';

export const useResumeForms = () => {
  const [activeFormIndex, setActiveFormIndex] = React.useState(ResumeForm.Personal);
  const [enableNext, setEnableNext] = React.useState(true);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeFormIndex < ResumeForm.Skills) {
      next();
    } else {
      navigate(`/pdf-view`);
    }
  };

  const prev = () => {
    setActiveFormIndex((prev) => Math.max(prev - 1, ResumeForm.Personal));
  };

  const next = () => {
    setActiveFormIndex((prev) => Math.min(prev + 1, ResumeForm.Skills));
  };

  return {
    activeFormIndex,
    setActiveFormIndex,
    enableNext,
    setEnableNext,
    handleNext,
    prev,
    next
  };
};
