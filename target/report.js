$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AaddTariff.feature");
formatter.feature({
  "name": "to test mutliple values for adding tariff paln",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To test user is able to add plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us1"
    }
  ]
});
formatter.step({
  "name": "the user is on the telecom homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks on addtariff plans button",
  "keyword": "And "
});
formatter.step({
  "name": "the user\"\u003cMR\u003e\"\"\u003cFL\u003e\"\"\u003cFI\u003e\"\"\u003cSMS\u003e\"\"\u003cLM\u003e\"\"\u003cIM\u003e\"\"\u003cSMP\u003e\" will fill all the valid details",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "the user should add the plan details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MR",
        "FL",
        "FI",
        "SMS",
        "LM",
        "IM",
        "SMP"
      ]
    },
    {
      "cells": [
        "12",
        "2",
        "2",
        "4",
        "5",
        "12",
        "43"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test user is able to add plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functional"
    },
    {
      "name": "@us1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_on_the_telecom_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on addtariff plans button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_clicks_on_addtariff_plans_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user\"12\"\"2\"\"2\"\"4\"\"5\"\"12\"\"43\" will fill all the valid details",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplanSteps.the_user_will_fill_all_the_valid_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should add the plan details",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplanSteps.the_user_should_add_the_plan_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "check the reset button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@functional"
    },
    {
      "name": "@us2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user must be on addtariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_must_be_on_addtariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter all the fields values",
  "rows": [
    {
      "cells": [
        "MR",
        "12"
      ]
    },
    {
      "cells": [
        "FL",
        "420"
      ]
    },
    {
      "cells": [
        "FI",
        "420"
      ]
    },
    {
      "cells": [
        "SMS",
        "23"
      ]
    },
    {
      "cells": [
        "LM",
        "123"
      ]
    },
    {
      "cells": [
        "IM",
        "424"
      ]
    },
    {
      "cells": [
        "SMP",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplanSteps.the_user_enter_all_the_fields_values(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on reset button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_on_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user must not see any values in the fields",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplanSteps.the_user_must_not_see_any_values_in_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "To Test Addtariff plan functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "To test customer id generation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on addcustomer button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_clicks_on_addcustomer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will fill all the details",
  "rows": [
    {
      "cells": [
        "sridhar",
        "deiva",
        "sridhar@gmail.com",
        "chennai",
        "9567019394"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_will_fill_all_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the customerid",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_user_should_see_the_customerid()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/AddPlan.feature");
formatter.feature({
  "name": "To add plan to customer 3rd feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "the user must be on telecom home page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "To test valid customer id takes to next page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@sprint3"
    },
    {
      "name": "@Addplancustomer"
    }
  ]
});
formatter.step({
  "name": "the user clicks on addtariffplan to customer button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_clicks_on_addtariffplan_to_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter valid customer id",
  "rows": [
    {
      "cells": [
        "928500"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AssigntariffPlantocustomerSteps.the_user_enter_valid_customer_id(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user must see the tariff plan details page",
  "keyword": "Then "
});
formatter.match({
  "location": "AssigntariffPlantocustomerSteps.the_user_must_see_the_tariff_plan_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "the user must be on telecom home page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "To test invalid customer id receives error message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@sprint3"
    }
  ]
});
formatter.step({
  "name": "the user clicks on addtariffplan to customer button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_clicks_on_addtariffplan_to_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter invalid customer id",
  "rows": [
    {
      "cells": [
        "928501"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AssigntariffPlantocustomerSteps.the_user_enter_invalid_customer_id(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user must receive error message",
  "keyword": "Then "
});
formatter.match({
  "location": "AssigntariffPlantocustomerSteps.the_user_must_receive_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Paybilling.feature");
formatter.feature({
  "name": "To verify paybilling feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the customerid in billing field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user must launch the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks on paybilling button",
  "keyword": "And "
});
formatter.step({
  "name": "the user enter\"\u003ccustomerid\u003e\" the customerid",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "the user should navigate to details page\"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerid",
        "status"
      ]
    },
    {
      "cells": [
        "928510",
        "error message"
      ]
    },
    {
      "cells": [
        "928500",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the customerid in billing field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user must launch the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_must_launch_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on paybilling button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_clicks_on_paybilling_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter\"928510\" the customerid",
  "keyword": "When "
});
formatter.match({
  "location": "Paybillingsteps.the_user_enter_the_customerid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should navigate to details page\"error message\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Paybillingsteps.the_user_should_navigate_to_details_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the customerid in billing field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user must launch the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_must_launch_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on paybilling button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_user_clicks_on_paybilling_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter\"928500\" the customerid",
  "keyword": "When "
});
formatter.match({
  "location": "Paybillingsteps.the_user_enter_the_customerid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should navigate to details page\"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Paybillingsteps.the_user_should_navigate_to_details_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});