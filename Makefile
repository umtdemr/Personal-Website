push_git:
	@echo "Pushing..."
	git add .
	git commit -m "$(c)"
	git push
