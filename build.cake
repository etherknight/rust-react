#addin nuget:?package=Cake.Yarn&version=2.0+

var target = Argument("target", "Help");
var configuration = Argument("configuration", "Release");

//////////////////////////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////////////////////////
Task("InstallMoon")
    .Does(() => {
        Yarn.Add(settings => settings.Package("cli", null, "@moonrepo"));
    });

Task("Setup")
    .IsDependentOn("InstallMoon")
    .Does(() => {
        DotNetTool("mycli message");
        Console.WriteLine("Setup complete");
    });

//////////////////////////////////////////////////////////////////////
// EXECUTION
//////////////////////////////////////////////////////////////////////

RunTarget("Setup");