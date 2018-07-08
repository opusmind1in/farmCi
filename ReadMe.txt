Description:

Automation Assignment using Selenium with cucumber framework and MAven as build management tool.

Prerequisite/Configuration setup required for the project:

JRE/JDK 1.8
Maven 3.1.1
Eclipse IDE

Download and setup project on local machine:
Download and open the project as an existing Maven project in Eclipse IDE
Select the correct Maven directory under 'Maven home directory in File->Settings-->Build,execution,deployment-->Maven
Select the correct JDK for the project
Re-build the project and all the Maven dependencies will be automatically resolved.

Run from Maven:

Go to terminal or open command prompt
Navigate to Project Path
Run the command 'mvn clean install'

Viewing reports:

When executing from IDE, reports are generated at 'target/cucumber-reports/index.html'
Note: If Chrome driver has issues then please add appropriate driver.

Following enhancements can be done for the project:
-- Test data can be included to cucumber feature file for easier user experience in BDD.
-- The project can be run from Jenkins by installing appropriate maven dependency plugins for Jenkins.
- Screenshots can be enabled for easy reporting purpose.

Reports generated:
The reports will be generated in cucumber-html,xml formats
