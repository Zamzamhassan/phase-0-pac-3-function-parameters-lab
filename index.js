function introduction(name)
{
     return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name,language)
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name, langauge = "JavaScript")
{
    return `Hi, my name is ${name} and I am learning to program in ${langauge}.`;
}
introduction("Aki");
introduction("Samip");
introductionWithLanguage("Aki","Ember.js");
introductionWithLanguage("Samip","React");
introductionWithLanguageOptional("Gracie","JavaScript")
introductionWithLanguageOptional("Gracie","Python")