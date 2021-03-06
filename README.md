# Reaktor coding assignment => David Leonardi

### To run

* Install the dependencies:

```
npm install
```

* Run development server:

```
npm run dev
```

Open the web browser to `http://localhost:8080/`




Original assignment description:

Coding assignment: view packages

On a Debian or an Ubuntu system there is a file called /var/lib/dpkg/status that holds information about software packages that the system knows about. Write a small program in programming language you choose that exposes some key information about currently installed packages via a html interface. The program should listen to http requests on port 8080 on localhost and provide the following features:
- The index page lists installed packages alphabetically with package names as links.
- When following each link, you arrive at an information about a single package. The following information should be included:
- Name
- Description
- The names of the packages the current package depends on (skip version numbers)
- The names of the packages that depend on the current package
- The dependencies and reverse dependencies should be clickable and the user can navigate the package structure by clicking from package to package.
Some things to keep in mind:
- Minimize the use of external dependencies.
- The goal of the assignment is to view how you solve the problems with the programming language, not how well you use package managers :)
- The main design goal of this program is maintainability.
- Only look at the Depends field. Ignore other fields that works kind of similarly, such as Suggests and Recommends.
- Sometimes there are alternates in a dependency list, separated by the pipe character (|). When rendering such dependencies, render any alternative that maps to a package name that have an entry in the status file as a link and just print the name of the package name for other packages.
- The section Syntax of control files of the Debian Policy Manual applies to the input data.
- A sample input file from https://gist.github.com/lauripiispanen/29735158335170c27297422a22b48caa
- We get many code samples per week, and therefore for your own sake, please keep the code simple and sweet. Anything unnecessarily complex, undocumented or untestable will be rejected by default.
- Please avoid making your submission available to potential third parties by posting it to an open service such as github.
- To facilitate keeping track of submissions, please include your name in the file you submit as well as in any included text artifacts.
