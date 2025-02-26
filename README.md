function love.load()
    love.window.setTitle("Pedro Anjo Scripts")
    love.window.setMode(600, 400)
    
    buttons = {
        {text = "W Azure", link = "https://direct-link.net/1286322/w-azure", x = 200, y = 150},
        {text = "Annie Hub", link = "https://link-target.net/1286322/annie-hub", x = 200, y = 220}
    }
end

function love.draw()
    love.graphics.setBackgroundColor(0, 0, 1) -- Fundo azul
    love.graphics.setColor(1, 1, 1)
    love.graphics.printf("Pedro Anjo Scripts", 0, 50, 600, "center")
    
    for _, button in ipairs(buttons) do
        love.graphics.setColor(1, 1, 1)
        love.graphics.rectangle("fill", button.x, button.y, 200, 50, 10, 10)
        love.graphics.setColor(0, 0, 0)
        love.graphics.printf(button.text, button.x, button.y + 15, 200, "center")
    end
end

function love.mousepressed(x, y, button)
    if button == 1 then
        for _, btn in ipairs(buttons) do
            if x > btn.x and x < btn.x + 200 and y > btn.y and y < btn.y + 50 then
                love.system.openURL(btn.link)
            end
        end
    end
end
