library(corrplot)
corr <- cor(dataset)

if (!exists("settings_method"))
{
    settings_method = "circle";
}

corrplot(corr, method=settings_method, order = "hclust")