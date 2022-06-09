export const initialFieldData = {
    firstName: {
      value: "",
      lookType: "default",
      message: { text: "" },
      isValid: false,
    },
    lastName: {
      value: "",
      lookType: "default",
      message: { text: "" },
      isValid: false,
    },
    email: {
      value: "",
      lookType: "default",
      message: { text: "" },
      isValid: false,
    },
    phone: {
      value: "",
      lookType: "default",
      message: { text: "" },
      isValid: false,
    },
    jobTitle: {
      value: "",
      lookType: "default",
      message: { text: "" },
      isValid: false,
    },
    company: {
      value: "",
      lookType: "default",
      message: { text: "" },
      isValid: false,
    },
    analyticsPlatform: {
      value: "",
      options: [
        { id: "cf_analytics_platform_splunk", label: "Splunk", value: "Splunk" },
        {
          id: "cf_analytics_platform_sumo_logic",
          label: "Sumo Logic",
          value: "Sumo Logic",
        },
        {
          id: "cf_analytics_platform_datalog",
          label: "Datalog",
          value: "Datalog",
        },
        { id: "cf_analytics_platform_other", label: "Other", value: "Other" },
      ],
      lookType: "default",
      message: { text: "" },
      isValid: true,
    },
    termsAgreement: {
      value: false,
      lookType: "default",
      message: { text: "" },
      isValid: false,
    },
  }
  
  export const responseMessages = {
    success:
      "Thanks for signing up with Railflow. Someone from our customer support team will send you an evaluation license with instructions and optional demo in 24 hours.",
    failure: "Oops, something went wrong...",
  }
  